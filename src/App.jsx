import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveyLocalization } from "survey-core";
import "survey-core/survey.i18n";
import { useMemo } from "react";

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
          title: "¿Dónde vives?",
          "choices": [
            "Amazonas",
            "Áncash",
            "Apurímac",
            "Arequipa",
            "Ayacucho",
            "Cajamarca",
            "Cusco",
            "Huancavelica",
            "Huánuco",
            "Ica",
            "Junín",
            "La Libertad",
            "Lambayeque",
            "Lima",
            "Callao",
            "Loreto",
            "Madre de Dios",
            "Moquegua",
            "Pasco",
            "Piura",
            "Puno",
            "San Martín",
            "Tacna",
            "Tumbes",
            "Ucayali"
          ],
          isRequired: true
        },
        {
          type: "text",
          name: "correo",
          title: "Correo",
          description: "(Si resulta ganador, utilizaremos este correo para comunicarnos con usted)",
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
          choicesOrder: "random",
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
          title: "¿En algún momento has intentado o buscado contratar un seguro de salud privado de forma activa?",
          choices: [
            "Sí",
            "No"
          ],
          isRequired: true
        }, {
          type: "checkbox",
          name: "objetivos_del_seguro",
          title: "¿Para quiénes estabas o estás buscando un seguro de salud?",
          description: "(opción multiple)",
          visibleIf: "{busqueda_seguro} = 'Sí'",
          choices: [
            "Para mí",
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
        }, {
          type: "text",
          name: "motivono",
          title: "¿Por qué de momento nunca has buscado de forma activa un seguro de salud privado?",
          visibleIf: "{busqueda_seguro} = 'No'",
          isRequired: true
        }, {
          type: "text",
          name: "incentivono",
          title: "¿Qué tendría que tener para que te interese uno?",
          visibleIf: "{busqueda_seguro} = 'No'",
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
          choicesOrder: "random",
          choices: [
            {
              value: "consulta externa",
              text: "Consulta externa (consulta con médico general o especialista sin hospitalización)"
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
          choicesOrder: "random",
          title: "Si tuvieras que ELIMINAR una cobertura de tu seguro de salud, ¿cuál sería la que MENOS te afectaría?",
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
          choicesOrder: "random",
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
        }, {
          type: "checkbox",
          name: "beneficio_extra",
          title: "Pensando en beneficios adicionales, ¿en cuál de las siguientes empresas le gustaría recibir descuentos como parte de su seguro de salud?",
          description: "(máximo 2)",
          maxSelectedChoices: 2,
          choicesOrder: "random",
          choices: [
            {
              value: "farmacias",
              text: "Farmacias"
            }, {
              value: "supermercados",
              text: "Supermercados"
            }, {
              value: "gimnasio",
              text: "Gimnasio"
            }, {
              value: "comidarapida",
              text: "Restaurantes de comida rápida"
            }, {
              value: "opticas",
              text: "Ópticas (lentes)"
            }, {
              value: "appsdebienestarydeporte",
              text: "Apps de bienestar y deporte"
            }, {
              value: "cineplanet",
              text: "Cineplanet (cines)"
            }, {
              value: "utp",
              text: "UTP (Universidades)"
            }, {
              value: "innova",
              text: "Innova Schools (Colegios)"
            }, {
              value: "zegelidat",
              text: "Zegel/Idat (Institutos)"
            }, {
              value: "otro",
              text: "Otro"
            }
          ],
          isRequired: true
        }
      ]
    }
  ]
};

export default function App() {
  const grupo = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("grupo") || "sin_grupo";
  }, []);

  const survey = useMemo(() => {
    const model = new Model(surveyJson);

    // opcional: guardarlo también dentro de SurveyJS
    model.setValue("grupo_oculto", grupo);

    model.onComplete.add(async (sender) => {
      const raw = sender.data;

      const mappedData = {
        nombre: raw.nombre,
        edad: raw.edad ? parseInt(raw.edad) : null,
        sexo: raw.sexo,
        correo: raw.correo,
        residencia: raw.residencia,
        seguro_de_salud: raw.seguro_de_salud,
        busqueda_seguro: raw.busqueda_seguro,
        objetivos_del_seguro: Array.isArray(raw.objetivos_del_seguro)
          ? raw.objetivos_del_seguro
          : [],
        presupuesto: raw.presupuesto ? parseInt(raw.presupuesto) : null,
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
        grupo_oculto: grupo,
        motivono: raw.motivono,
        incentivono: raw.incentivono,
        beneficio_extra: Array.isArray(raw.beneficio_extra)
          ? raw.beneficio_extra
          : []
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

    model.locale = "es";
    return model;
  }, [grupo]);

  return <Survey model={survey} />;
}