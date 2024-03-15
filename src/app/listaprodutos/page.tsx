import Link  from "next/link";

export default function ListaProdutos() {
    return (
        <>
            <h1> Produtos </h1>
            <ol>
                <Link href={"/listaprodutos/1"}><li>Produtos 1</li></Link>
                <Link href={"/listaprodutos/2"}><li>Produtos 2</li></Link>
                <Link href={"/listaprodutos/3"}><li>Produtos 3</li></Link>
            </ol>
            <Link href={"/"}>Home</Link>
        </>

    );
}