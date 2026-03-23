import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

const surveyJson = {
  title: "Encuesta de beneficios de salud",
  description: "Ayúdanos a entender qué valoras más",
  pages: [
    {
      name: "pagina1",
      elements: [
        {
          type: "text",
          name: "nombre",
          title: "nombre"
        },
        {
          type: "text",
          name: "celular",
          inputType: "tel",
          title: "celular",
          validators: [
            {
              type: "regex",
              regex: "^9[0-9]{8}$",
              text: "Ingresa un celular válido de 9 dígitos"
            }
          ]
        },
        {
          type: "radiogroup",
          name: "tienesseguro",
          title: "¿Tienes un seguro de salud?",
          "choices": [
            "Sí",
            "No"
          ]
        }, {
          type: "radiogroup",
          name: "nombre_seguro",
          title: "¿Qué seguro tienes?",
          visibleIf: "{tienesseguro} = 'Sí'",
          "choices": [
            "SIS",
            "ESSALUD",
            "EPS",
            "PRIVADO",
            "VIVE+",
            "OTRO"
          ]
        }
      ]
    },
    {
      "name": "pagina2",
      "elements": [
        {
          "type": "text",
          "name": "informacionextra",
          "title": "¿Cuéntanos que más quieres agregar?"
        }
      ]
    }
  ]
};

export default function App() {
  const survey = new Model(surveyJson);

  survey.onComplete.add(async (sender) => {
    const raw = sender.data;

    const mappedData = {
      nombre: raw.nombre,
      celular: raw.celular,
      tienesseguro: raw.tienesseguro,
      nombre_seguro: raw.nombre_seguro
      //payload_json: JSON.stringify(raw),
      //tiene_seguro: raw.tiene_seguro || "",
      //beneficios: Array.isArray(raw.beneficios) ? raw.beneficios.join(", ") : "",
      //preferencia_clinica: raw.preferencia_clinica || "",
      //extra: raw.extra || ""
    };

    const response = await fetch("https://encuesta-api-1pl0.onrender.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: mappedData
      })
    });

    const result = await response.json();
    console.log(result);
  });

  return <Survey model={survey} />;
}