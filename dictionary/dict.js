$(document).ready(function() {
    $("#loader").hide();

    $(document)
        .ajaxStart(() => { $("#loader").show(); })
        .ajaxStop(() => { $("#loader").hide(); });

    $("#lookupBtn").click(() => {
        $.ajax({
            url: "http://localhost:3000/dictionary",
            type: "GET",
            data: {
                term: $("#term").val()
            },
            dataType: "json",
            success: (definitions) => {
                let definitionListElement = $("#definitionList");
                definitionListElement.empty();
                if (definitions.length === 0) {
                    definitionListElement
                        .append(`<p class="definitionItem">Definition not found!</p>`)
                } else {
                    definitions.forEach((item, index) => {
                        definitionListElement
                            .append(
                                `
                                <p class="definitionItem">
                                    <span class="defNum">${index + 1}</span>(<span class="defType">${item.wordtype}</span>) ::
                                    <span class="def">
                                        ${item.definition}
                                    </span>
                                </p>
                            `
                            );
                    })
                }
            },
            error: (error) => {
                $("#definitionList").empty();
                alert(error.responseText);
            }
        });
    });
});