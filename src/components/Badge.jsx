// Define um componente funcional chamado Badge que recebe uma propriedade chamada "children"
function Badge({ children }) {
    // Retorna um elemento <span> com a classe CSS "badge" e renderiza o conteúdo passado como "children"
    return <span className="badge">{children}</span>;
}

// Exporta o componente Badge como o padrão deste módulo
export default Badge;
