import { Link } from "react-router";

function EnlaceVerTodos({ to, texto }: { to: string; texto: string }) {
    return (
        <Link
            to={to}
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[#edc577] transition-colors hover:text-[#f5eee2]"
        >
            {texto}
            <span aria-hidden="true">→</span>
        </Link>
    );
}

export default EnlaceVerTodos;
