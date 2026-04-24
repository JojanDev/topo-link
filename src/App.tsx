// SECCIÓN: PERFIL PROFESIONAL
// Sugerencia: Colócalo después de la sección de "Servicios"

import { Award, ShieldCheck, MapPin } from "lucide-react";

const PerfilProfesional = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-slate-900/50 border border-white/5 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16">
          {/* LADO IZQUIERDO: IMAGEN */}
          <div className="relative w-full lg:w-2/5">
            <div className="absolute -inset-2 bg-yellow-400 rounded-3xl rotate-3"></div>
            <div className="relative aspect-[4/5] bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Aquí irá la foto de Ernesto Alfonso Delgado Flores */}
              <img
                src="/src/assets/image.png"
                alt="Ernesto Alfonso Delgado Flores - Topógrafo"
                className="w-full h-full object-cover"
              />
              {/* Overlay con nombre rápido */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                <p className="text-yellow-400 font-bold text-lg uppercase tracking-widest">
                  Topógrafo Líder
                </p>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: INFO */}
          <div className="w-full lg:w-3/5 space-y-6">
            <h3 className="text-yellow-400 text-sm font-black uppercase tracking-[0.3em]">
              El Profesional
            </h3>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Ernesto Alfonso <br /> Delgado Flores
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed italic">
              "Llevo décadas recorriendo las montañas y valles de Santander. Mi
              compromiso es que cada cliente tenga la certeza absoluta de lo que
              mide su tierra."
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400/10 p-3 rounded-xl border border-yellow-400/20">
                  <Award className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Experiencia Real</h4>
                  <p className="text-slate-500 text-sm">
                    Más de [X] años realizando levantamientos en zonas rurales y
                    urbanas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400/10 p-3 rounded-xl border border-yellow-400/20">
                  <ShieldCheck className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Ética y Precisión</h4>
                  <p className="text-slate-500 text-sm">
                    Resultados técnicos avalados para procesos legales y
                    notariales.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-sm">
                <MapPin size={16} className="text-yellow-400" /> Conocedor de
                Puerto Wilches
              </div>
              <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-sm">
                <MapPin size={16} className="text-yellow-400" /> Experto en
                Barrancabermeja
              </div>
              <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-sm">
                <MapPin size={16} className="text-yellow-400" /> Especialista en
                Cachirí
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import {
  Phone,
  MessageCircle,
  Ruler,
  Map,
  Construction,
  ChevronRight,
} from "lucide-react";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans selection:bg-yellow-400 selection:text-black">
      {/* --- NAVBAR --- */}
      <nav className="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <Map className="text-black" size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase italic">
              Topografía <span className="text-yellow-400">Santander</span>
            </span>
          </div>
          <a
            href="https://wa.me/5730000000"
            className="hidden md:flex bg-white hover:bg-yellow-400 text-black px-6 py-2.5 rounded-full items-center gap-2 transition-all font-bold text-sm"
          >
            <MessageCircle size={18} /> INICIAR PROYECTO
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION V3 (DARK & TALL) --- */}
      <header className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-yellow-400/20">
        {/* Gradiente de fondo para profundidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-[#0a0a0a]"></div>

        {/* Decoración de malla técnica (Grid) */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="relative z-20 max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8 py-12">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-[0.2em]">
                Disponible en Santander
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              MEDIMOS SU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                PATRIMONIO
              </span>{" "}
              <br />
              CON PRECISIÓN.
            </h2>

            <p className="text-xl text-slate-400 max-w-xl leading-relaxed border-l-2 border-yellow-400 pl-6">
              Evite problemas legales y dudas. Entregamos planos certificados
              para fincas, lotes y obras en toda la región.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-black py-5 px-10 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all transform hover:scale-105 flex items-center gap-3">
                COTIZAR TRABAJO <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Columna Derecha: Imagen con máscara o efecto */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-yellow-400/20 blur-3xl rounded-full"></div>
            <div className="relative aspect-[4/5] bg-slate-900 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              <div className="h-full w-full flex items-center justify-center text-slate-700 italic border-2 border-dashed border-white/5 m-4 rounded-3xl">
                [Foto de alta calidad de equipo topográfico]
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- SECCIÓN: SERVICIOS CON CARDS OSCURAS --- */}
      <section className="py-32 max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-4xl font-black mb-4 uppercase">
              Servicios Técnicos
            </h3>
            <div className="h-1 w-20 bg-yellow-400 mb-6"></div>
            <p className="text-slate-400 text-lg">
              Traduciendo la ingeniería a soluciones para su propiedad.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "División de Lotes",
              label: "Ventas o Herencias",
              desc: "Separamos su terreno legalmente para que cada parte tenga su propia escritura.",
              icon: <Map className="text-black" />,
            },
            {
              title: "Linderos Exactos",
              label: "Conflictos con Vecinos",
              desc: "Marcamos los límites reales de su predio para acabar con las dudas de cercas.",
              icon: <Ruler className="text-black" />,
            },
            {
              title: "Planos de Obra",
              label: "Construcción",
              desc: "Nivelación y levantamientos para que su constructor trabaje sobre seguro.",
              icon: <Construction className="text-black" />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-b from-slate-900 to-black p-10 rounded-3xl border border-white/5 hover:border-yellow-400/50 transition-all duration-500 shadow-2xl"
            >
              <div className="bg-yellow-400 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                {item.icon}
              </div>
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
                {item.label}
              </span>
              <h4 className="text-2xl font-bold mt-2 mb-4 group-hover:text-yellow-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <PerfilProfesional></PerfilProfesional>

      {/* --- FOOTER / CONTACTO --- */}
      <footer className="bg-black border-t border-white/5 py-20 px-6">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-black text-white mb-4">
              ¿Hablamos de su terreno?
            </h3>
            <p className="text-slate-500 mb-8 text-lg">
              Atención inmediata para Girón, Bucaramanga, Barranca y todo
              Santander.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-2xl font-bold text-yellow-400">
                <Phone size={24} /> +57 316 533 9634
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <MapPin size={24} /> Santander, Colombia
              </div>
            </div>
          </div>
          <div className="bg-yellow-400 p-10 rounded-[3rem] text-black text-center">
            <h4 className="text-2xl font-black mb-4 underline decoration-4 underline-offset-8">
              CONSULTA GRATUITA
            </h4>
            <p className="font-medium mb-6 italic text-black/70 italic">
              "La precisión no es un gasto, es la seguridad de su patrimonio."
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform w-full">
              ENVIAR UBICACIÓN POR WHATSAPP
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
