import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveyLocalization } from "survey-core";
import "survey-core/survey.i18n";

surveyLocalization.defaultLocale = "es";

const surveyJson = {
  title: "Encuesta sobre seguros de salud",
  description: "Ayúdanos a crear el seguro de salud ideal para ti y tus seres queridos",
  showProgressBar: "top",
  progressBarType: "pages",
  pages: [
    {
      name: "pagina1",
      title: "Datos generales",
      description: "Cuéntanos sobre ti",
      elements: [
        {
          type: "text",
          name: "nombre",
          title: "Nombre"
        },
        {
          type: "text",
          name: "edad",
          inputType: "number",
          title: "Edad"
        },
        {
          type: "dropdown",
          name: "sexo",
          title: "Sexo",
          "choices": [
            "Masculino",
            "Femenino"
          ]
        },
        {
          type: "text",
          name: "celular",
          inputType: "tel",
          title: "Celular",
          validators: [
            {
              type: "regex",
              regex: "^9[0-9]{8}$",
              text: "Ingresa un celular válido de 9 dígitos"
            }
          ]
        }, {
          type: "dropdown",
          name: "seguro_de_salud",
          title: "¿Qué seguro de salud tienes?",
          description: "",
          "choices": [
            "SIS",
            "ESSALUD",
            "SALUDPOL / FFAA",
            "EPS",
            "OTRO"
          ]
        }
      ]
    },
    {
      name: "pagina2",
      title: "Seguro de salud",
      description: "Cuéntanos sobre tu experiencia con seguros de salud",
      elements: [
        {
          type: "dropdown",
          name: "busqueda_seguro",
          title: "¿Has buscado anteriormente contratar un seguro de salud privado?",
          choices: [
            "Sí",
            "No"
          ]
        }, {
          type: "checkbox",
          name: "objetivos_del_seguro",
          title: "¿Para quiénes estabas buscando un seguro de salud?",
          visibleIf: "{busqueda_seguro} = 'Sí'",
          choices: [
            "Para mi",
            "Mis padres",
            "Mi pareja",
            "Mis hijos",
            "Otros"
          ]
        }, {
          type: "dropdown",
          name: "presupuesto",
          title: "¿Cuál era tu presupuesto mensual para contratar un seguro de salud?",
          visibleIf: "{busqueda_seguro} = 'Sí'",
          choices: [
            "Hasta 30 soles",
            "De 31 a 100 soles",
            "De 101 a 200",
            "Más de 201 soles"
          ]
        }
      ]
    },
    {
      name: "pagina3",
      title: "Dinámica de priorización",
      description: "Imaginemos que estamos por crear un seguro de salud ideal para ti",
      elements: [
        {
          type: "ranking",
          name: "ranking",
          title: "Ordena de más importante a menos importante qué descuentos te gustaría que estén en tu seguro de salud",
          choices: [
            {
              value: "ambulatoria",
              text: "Atención ambulatoria (consultas, exámenes, procedimientos, entre otros)"
            },
            {
              value: "emergencias",
              text: "Atención de emergencias"
            },
            {
              value: "hospitalaria",
              text: "Atención hospitalaria"
            },
            {
              value: "medicinas",
              text: "Descuento en medicinas"
            }
          ]
        }
      ]
    },
    {
      name: "pagina5",
      title: "Estamos por lanzar un seguro de salud. Elige el que mejor se acomode a tus necesidades y, si se concreta en el lanzamiento, te haremos un descuento especial",
      description: "(Esta elección no puede cambiarse)",
      elements: [
        {
          type: "html",
          name: "im_planes",
          html: `
              <div>
                <img src="/planes.png" style="max-width:100%; display:block; margin-bottom:10px;" />
              </div>
            `
        },
        {
          type: "dropdown",
          name: "plan",
          title: "Elige el plan que mejor se acomode a tus necesidades (recuerda que esta elección no podrás cambiarla luego)",
          choices: ["Ninguno", "A", "B", "C", "D"]
        }
      ]
    }
  ]
};

export default function App() {
  const survey = new Model(surveyJson);

  survey.onComplete.add(async (sender) => {
    const raw = sender.data;
    const ranking = raw.ranking || [];
    const mappedData = {
      nombre: raw.nombre,
      edad: parseInt(raw.edad),
      sexo: raw.sexo,
      celular: raw.celular,
      seguro_de_salud: raw.seguro_de_salud,
      busqueda_seguro: raw.busqueda_seguro,
      objetivos_del_seguro: Array.isArray(raw.objetivos_del_seguro)
        ? raw.objetivos_del_seguro
        : [],
      presupuesto: raw.presupuesto,
      ranking0: ranking[0] || "",
      ranking1: ranking[1] || "",
      ranking2: ranking[2] || "",
      ranking3: ranking[3] || "",
      plan: raw.plan

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
  survey.locale = "es";

  return <Survey model={survey} />;
}