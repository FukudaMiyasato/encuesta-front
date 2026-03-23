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
          title: "Celular"
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
          title: "¿En algún momento has intentado contratar un seguro de salud privado?",
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
          title: "¿Cuál era tu presupuesto mensual por persona para contratar un seguro de salud?",
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
      title: "Composición de un seguro ideal",
      description: "Imaginemos que estamos por crear un seguro de salud ideal para ti",
      elements: [
        {
          type: "checkbox",
          name: "cobertura",
          title: "Si su seguro solo pudiera tener 3 coberturas cuales elegiría",
          description: "(máximo 3)",
          maxSelectedChoices: 3,
          choices: [
            {
              value: "consulta externa",
              text: "consulta externa"
            },
            {
              value: "emergencia",
              text: "emergencia (cualquier malestar que tenga peligro de muerte)"
            },
            {
              value: "urgencias",
              text: "urgencias (cualquier malestar que no tenga peligro de muerte)"
            },
            {
              value: "hospitalizacion",
              text: "hospitalización"
            },
            {
              value: "maternidad",
              text: "maternidad en chequeos y parto"
            }
          ]
        }, {
          type: "radiogroup",
          name: "cobertura_dispensable",
          title: "Si tuvieras que eliminar una cobertura de tu seguro de salud, ¿cuál sería la que menos te afectaría?",
          choices: [
            {
              value: "consulta externa",
              text: "Consulta externa"
            },
            {
              value: "emergencia",
              text: "Emergencia (cualquier malestar que tenga peligro de muerte)"
            },
            {
              value: "urgencias",
              text: "Urgencias (cualquier malestar que no tenga peligro de muerte)"
            },
            {
              value: "hospitalizacion",
              text: "Hospitalización"
            },
            {
              value: "maternidad",
              text: "Maternidad en chequeos y parto"
            }
          ]
        }, {
          type: "checkbox",
          name: "cobertura_externa",
          title: "Si solo pudieras tener dos beneficios en la cobertura externa de tu seguro de salud, ¿cuáles elegirías?",
          description: "(máximo 2)",
          maxSelectedChoices: 2,
          choices: [
            {
              value: "medicinas",
              text: "Que cubra medicinas"
            },
            {
              value: "medicos",
              text: "Que cubra la consulta con los médicos"
            },
            {
              value: "laboratorioyradiografia",
              text: "Que cubra laboratorio y radiografías"
            },
            {
              value: "procedimientos",
              text: "Que incluya procedimientos (como endoscopía o electrocardiograma)"
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
      cobertura_externa: Array.isArray(raw.cobertura_externa)
        ? raw.cobertura_externa
        : [],
      cobertura: Array.isArray(raw.cobertura)
        ? raw.cobertura
        : [],
      cobertura_dispensable: raw.cobertura_dispensable,
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