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
      colCount: 2,
      elements: [
        {
          type: "text",
          name: "nombre",
          title: "Nombre y apellido",
          colSpan: 1,
          isRequired: true
        },
        {
          type: "text",
          name: "edad",
          inputType: "number",
          title: "Edad",
          isRequired: true
        },
        {
          type: "dropdown",
          name: "sexo",
          title: "Sexo",
          "choices": [
            "Masculino",
            "Femenino",
            "Otro"
          ],
          isRequired: true
        },
        {
          type: "dropdown",
          name: "residencia",
          title: "Distrito de residencia",
          "choices": [
            "Ancón",
            "Ate",
            "Barranco",
            "Breña",
            "Carabayllo",
            "Cercado de Lima",
            "Chaclacayo",
            "Chorrillos",
            "Cieneguilla",
            "Comas",
            "El agustino",
            "Independencia",
            "Jesús maría",
            "La molina",
            "La victoria",
            "Lince",
            "Los olivos",
            "Lurigancho",
            "Lurín",
            "Magdalena del mar",
            "Miraflores",
            "Pachacámac",
            "Pucusana",
            "Pueblo libre",
            "Puente piedra",
            "Punta hermosa",
            "Punta negra",
            "Rímac",
            "San bartolo",
            "San borja",
            "San isidro",
            "San Juan de Lurigancho",
            "San Juan de Miraflores",
            "San Luis",
            "San Martin de Porres",
            "San Miguel",
            "Santa Anita",
            "Santa María del Mar",
            "Santa Rosa",
            "Santiago de Surco",
            "Surquillo",
            "Villa el Salvador",
            "Villa Maria del Triunfo"
          ],
          isRequired: true
        },
        {
          type: "text",
          name: "celular",
          inputType: "tel",
          title: "Celular",
          isRequired: true
        }, {
          type: "dropdown",
          name: "clinica_recurrente",
          title: "Normalmente, ¿a qué centro acudes cuando se te presenta un problema de salud?",
          description: "",
          "choices": [
            {
              value: "SISOL",
              text: "SISOL / Hospital de solidaridad"
            },
            {
              value: "APJ",
              text: "APJ"
            },
            {
              value: "aviva",
              text: "aviva"
            },
            {
              value: "San Pablo",
              text: "San Pablo / San Gabriel / Jesús del norte"
            },
            {
              value: "Cayetano Heredia",
              text: "Clínica Cayetano Heredia"
            },
            {
              value: "Minsa",
              text: "Minsa o ministeriode salud"
            },
            {
              value: "ESSALUD",
              text: "ESSALUD"
            },
            {
              value: "Otro",
              text: "Otro"
            }
          ],
          isRequired: true
        }, {
          type: "checkbox",
          name: "motivo_de_visita",
          title: "¿Cuál suele ser el motivo por el que visita la clínica?",
          description: "",
          "choices": [
            {
              value: "cronico",
              text: "Enfermedad crónica (control o seguimiento)"
            },
            {
              value: "emergencia_urgencia",
              text: "Emergencia o urgencia"
            },
            {
              value: "chequeo_rutina",
              text: "Chequeo de rutina"
            },
            {
              value: "prevencion",
              text: "Prevención (vacunas o exámenes)"
            },
            {
              value: "consulta",
              text: "Consulta por malestar o síntomas"
            },
            {
              value: "otros",
              text: "Otros motivos"
            }
          ],
          isRequired: true
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
          name: "seguro_de_salud",
          title: "¿Qué seguro de salud tienes?",
          description: "",
          "choices": [
            "No tengo seguro",
            "SIS",
            "ESSALUD",
            "SALUDPOL / FFAA",
            "EPS",
            "OTRO"
          ],
          isRequired: true
        },
        {
          type: "dropdown",
          name: "busqueda_seguro",
          title: "¿En algún momento has intentado contratar un seguro de salud privado?",
          choices: [
            "Sí",
            "No"
          ],
          isRequired: true
        }, {
          type: "checkbox",
          name: "objetivos_del_seguro",
          title: "¿Para quiénes estabas buscando un seguro de salud?",
          description: "(opción multiple)",
          visibleIf: "{busqueda_seguro} = 'Sí'",
          choices: [
            "Para mi",
            "Mis padres",
            "Mi pareja",
            "Mis hijos",
            "Otros"
          ],
          isRequired: true
        }, {
          type: "text",
          name: "presupuesto",
          inputType: "number",
          title: "¿Cuál era tu presupuesto mensual en soles por persona para contratar un seguro de salud?",
          visibleIf: "{busqueda_seguro} = 'Sí'",
          isRequired: true
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
          title: "Si su seguro solo pudiera tener 3 coberturas, ¿cuáles elegiría?",
          description: "(máximo 3)",
          maxSelectedChoices: 3,
          choices: [
            {
              value: "consulta externa",
              text: "Consulta externa (Consulta con el médico (general o especialista) sin hospitalización)"
            },
            {
              value: "emergencia",
              text: "Emergencia (cualquier malestar que tenga peligro de muerte)"
            },
            {
              value: "dental",
              text: "Dental"
            },
            {
              value: "hospitalizacion",
              text: "Hospitalización"
            },
            {
              value: "maternidad",
              text: "Maternidad en chequeos y parto"
            }
          ],
          isRequired: true
        }, {
          type: "radiogroup",
          name: "cobertura_dispensable",
          title: "Si tuvieras que eliminar una cobertura de tu seguro de salud, ¿cuál sería la que menos te afectaría?",
          choices: [
            {
              value: "consulta externa",
              text: "Consulta externa (consulta con el médico general o especialista sin hospitalización)"
            },
            {
              value: "emergencia",
              text: "Emergencia (cualquier malestar que tenga peligro de muerte)"
            },
            {
              value: "dental",
              text: "Dental"
            },
            {
              value: "hospitalizacion",
              text: "Hospitalización (internamiento en clínica)"
            },
            {
              value: "maternidad",
              text: "Maternidad en chequeos y parto"
            }
          ],
          isRequired: true
        }, {
          type: "checkbox",
          name: "cobertura_externa",
          title: "Si solo pudieras elegir 2 beneficios para atención ambulatoria, ¿cuáles priorizarías?",
          description: "(Una cobertura ambulatoria es el conjunto de prestaciones de un seguro de salud que cubre atenciones médicas que no requieren hospitalización.)",
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
          ],
          isRequired: true
        }
      ]
    }
  ]
};

export default function App() {
  const survey = new Model(surveyJson);




  survey.onCurrentPageChanged.add(function (sender, options) {
    const currentPage = sender.currentPageNo;
    const totalPages = sender.visiblePageCount;


  });
  survey.onComplete.add(async (sender) => {
    const raw = sender.data;


    const mappedData = {
      nombre: raw.nombre,
      edad: parseInt(raw.edad),
      sexo: raw.sexo,
      celular: raw.celular,
      residencia: raw.residencia,
      seguro_de_salud: raw.seguro_de_salud,
      busqueda_seguro: raw.busqueda_seguro,
      objetivos_del_seguro: Array.isArray(raw.objetivos_del_seguro)
        ? raw.objetivos_del_seguro
        : [],
      presupuesto: parseInt(raw.presupuesto),
      cobertura_externa: Array.isArray(raw.cobertura_externa)
        ? raw.cobertura_externa
        : [],
      cobertura: Array.isArray(raw.cobertura)
        ? raw.cobertura
        : [],
      cobertura_dispensable: raw.cobertura_dispensable,
      clinica_recurrente: raw.clinica_recurrente,
      motivo_de_visita: Array.isArray(raw.motivo_de_visita)
        ? raw.motivo_de_visita
        : [],

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