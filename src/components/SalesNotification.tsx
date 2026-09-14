import { useEffect, useState } from "react";
import { ShoppingCart, MapPin, Clock } from "lucide-react";

interface NotificationData {
  name: string;
  gender: "male" | "female";
  region: string;
  packageName: string;
  timeAgo: string;
}

const names: { name: string; gender: "male" | "female" }[] = [
  { name: "Ana Beatriz", gender: "female" },
  { name: "Bruno Silva", gender: "male" },
  { name: "Camila Souza", gender: "female" },
  { name: "Diego Pereira", gender: "male" },
  { name: "Larissa Lima", gender: "female" },
  { name: "Gustavo Costa", gender: "male" },
  { name: "Beatriz Rocha", gender: "female" },
  { name: "João Pedro", gender: "male" },
  { name: "Mariana Mendes", gender: "female" },
  { name: "Marcos Oliveira", gender: "male" },
  { name: "Rita Dias", gender: "female" },
  { name: "Rafael Fernandes", gender: "male" },
  { name: "Patrícia Cardoso", gender: "female" },
  { name: "Thiago Martins", gender: "male" },
  { name: "Carolina Araújo", gender: "female" },
  { name: "Miguel Almeida", gender: "male" },
  { name: "Fernanda Ribeiro", gender: "female" },
  { name: "Rodrigo Carvalho", gender: "male" },
  { name: "Vanessa Pinto", gender: "female" },
  { name: "Eduardo Santos", gender: "male" },
];

const regions = [
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Curitiba",
  "Porto Alegre",
  "Salvador",
  "Fortaleza",
  "Recife",
  "Brasília",
  "Goiânia",
  "Campinas",
  "Florianópolis",
  "Manaus",
  "Belém",
  "Vitória",
];

const packages = ["Plano Básico", "Plano Premium"];

const timesAgo = [
  "há 30 segundos",
  "há 1 minuto",
  "há 2 minutos",
  "há 3 minutos",
  "há 5 minutos",
  "há 7 minutos",
  "há 10 minutos",
  "há 12 minutos",
  "há 15 minutos",
  "há 18 minutos",
  "há 20 minutos",
  "há 25 minutos",
];

function getRandomItem<T>(arr: T[]): T {
  if (arr.length === 0) throw new Error("Empty array");
  return arr[Math.floor(Math.random() * arr.length)] as T;
}

function generateNotification(): NotificationData {
  const { name, gender } = getRandomItem(names);
  return {
    name,
    gender,
    region: getRandomItem(regions),
    packageName: getRandomItem(packages),
    timeAgo: getRandomItem(timesAgo),
  };
}

export function SalesNotification() {
  const [notification, setNotification] = useState<NotificationData | null>(null);
  const [phase, setPhase] = useState<"hidden" | "entering" | "visible" | "exiting">("hidden");

  useEffect(() => {
    const cycle = () => {
      const next = generateNotification();
      setNotification(next);
      setPhase("entering");

      // Enter animation duration
      setTimeout(() => {
        setPhase("visible");
      }, 50);

      // Stay visible for 4 seconds
      setTimeout(() => {
        setPhase("exiting");
      }, 4050);

      // Wait for exit animation, then restart cycle
      setTimeout(() => {
        setPhase("hidden");
      }, 4900);
    };

    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      cycle();
    }, 3000);

    const interval = setInterval(() => {
      if (phase === "hidden" || phase === "exiting") {
        cycle();
      }
    }, 3000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [phase]);

  const translateClass =
    phase === "entering" || phase === "visible" ? "translate-x-0" : "-translate-x-[120%]";

  const opacityClass = phase === "hidden" ? "opacity-0" : "opacity-100";

  if (!notification || phase === "hidden") return null;

  return (
    <div
      className={`fixed top-4 right-4 z-50 max-w-xs transition-all duration-[700ms] ease-in-out ${translateClass} ${opacityClass}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-2xl">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <ShoppingCart className="size-5 text-primary" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-card-foreground">
            <span className="text-primary">{notification.name}</span> acabou de comprar
          </p>
          <p className="mt-0.5 text-xs font-extrabold text-primary">{notification.packageName}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3 text-primary" />
              {notification.timeAgo}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-3 text-primary" />
              {notification.region}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
