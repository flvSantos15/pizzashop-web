import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold">Whoops! aalgo aconteceu....</h1>
      
      <p className="text-accent-foreground">Um erro aconteceu na aplicação, abaixo voce pode encontrar mais detalhes:</p>
      {/* O correto e nao mostrar o erro para o usuario e sim mandar para uma plataforma de monitoramento */}
      <pre>{error?.message || JSON.stringify(error)}</pre>
      
      <p className="text-accent-foreground">
        Voltar para o{" "}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  );
}
