import {
  BookOpen,
  Heart,
  Activity,
  Users,
  MessageSquare,
  Scale
} from "lucide-react";

function AreasTabla() {
  return (
    <section id="services" className="tabla-section">
      <h2>Áreas de Servicio</h2>

      <div className="tabla-container">
        <table className="tabla-servicios">
          <thead>
            <tr>
              <th>Área</th>
              <th>Especialistas</th>
              <th>Impacto</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td className="area-cell">
                <BookOpen size={20} />
                <span>Soporte Educativo</span>
              </td>
              <td>Educadoras capacitadas</td>
              <td>Estrategias adaptadas, tutorías y apoyo curricular.</td>
            </tr>

            <tr>
              <td className="area-cell">
                <Heart size={20} />
                <span>Bienestar Emocional</span>
              </td>
              <td>Psicología Clínica e Infanto-Juvenil</td>
              <td>Acompañamiento emocional y desarrollo social.</td>
            </tr>

            <tr>
              <td className="area-cell">
                <Activity size={20} />
                <span>Autonomía Funcional</span>
              </td>
              <td>Terapia Ocupacional</td>
              <td>Autonomía y habilidades para la vida diaria.</td>
            </tr>

            <tr>
              <td className="area-cell">
                <Users size={20} />
                <span>Orientación Familiar</span>
              </td>
              <td>Psicólogos · Trabajadores Sociales</td>
              <td>Apoyo a padres y fortalecimiento de red familiar.</td>
            </tr>

            <tr>
              <td className="area-cell">
                <MessageSquare size={20} />
                <span>Métodos de Comunicación</span>
              </td>
              <td>Fonoaudiología</td>
              <td>Desarrollo de habilidades comunicativas.</td>
            </tr>

            <tr>
              <td className="area-cell">
                <Scale size={20} />
                <span>Asesoría Legal</span>
              </td>
              <td>Abogados</td>
              <td>Orientación sobre derechos y deberes.</td>
            </tr>

          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AreasTabla;
