import Link from "next/link";
import "../styles/paginacion.css"

export function Paginacion(
    {page, pageCount, total}  // ← Quita 'pageSize' si no lo usas
){
    const isFirstPage = page === 1;
    const isLastPage = page === pageCount;

    const prevPage = page - 1;
    const nextPage = page + 1;

    const prevPageUrl = isFirstPage ? "#" : `?page=${prevPage}`;
    const nextPageUrl = isLastPage ? "#" : `?page=${nextPage}`;

    console.log("page:", page, "pageCount:", pageCount, "isLastPage:", isLastPage);

    return (
        <div className="pag">
            <Link href={prevPageUrl} className={isFirstPage ? "button--sky--desactivated" :"button--sky"}>
                Anterior
            </Link>
            <Link href={nextPageUrl} className={isLastPage ? "button--sky--desactivated" : "button--sky"}>
                Siguiente
            </Link>
        </div>
    )
}