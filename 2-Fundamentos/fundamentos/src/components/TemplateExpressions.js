const TemplateExpressions = () => {
    const name = "Gabriel";
    const data = {
        age: 20,
        job: "programmer",
    };

    return(
        <div>
            <h1>Ola {name}, tudo bem?</h1>
            <p>Voce Atue como: {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
}

export default TemplateExpressions;