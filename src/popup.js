document.querySelector('.pc-use-options').addEventListener('change', (e) => {
    showAdditionalInfo(e.target.value);
});

const AdditionalInfoLabelText = {
    'play': 'Você priorizaria gráfico ou performance?',
    'study': 'Seu estudo exige a utilização de programas mais pesados?',
    'work': 'Seu trabalho exige a utilização de programas mais pesados?'
}

const AdditionalInfoOptionsText = {
    first: {
        'play': 'Gráfico',
        'study': 'Não',
        'work': 'Não'
    },
    second: {
        'play': 'Performance',
        'study': 'Sim',
        'work': 'Sim'
    }
}

function hideAdditionalInfo() {
    document.querySelector('.additional-info-div').hidden = true;
}

function showAdditionalInfo(selectedUseOption) {
    changeAdditionalInfoOptionsText(selectedUseOption);
    const additionalInfoLabel = document.querySelector('#additionalInfoLabel');
    additionalInfoLabel.innerText = AdditionalInfoLabelText[selectedUseOption];
    document.querySelector('.additional-info-options-div').hidden = false;
}

function changeAdditionalInfoOptionsText(useOption) {
    const additionalInfoSelect = document.querySelector('.additional-info-options');
    additionalInfoSelect.options[1].text = AdditionalInfoOptionsText.first[useOption];
    additionalInfoSelect.options[2].text = AdditionalInfoOptionsText.second[useOption];
}