const additionalInfoSelect = document.getElementById('additionalInfoSelect');
additionalInfoSelect.addEventListener('click', function() {
    showAdditionalInfo(additionalInfoSelect.value);
});


const AdditionalInfoLabelText = {
    'play': 'Você priorizaria gráfico ou performance?',
    'study': 'Seu estudo exige a utilização de programas mais pesados?',
    'work': 'Seu trabalho exige a utilização de programas mais pesados?'
}

function hideAdditionalInfo() {
    document.getElementById('additionalInfoDiv').hidden = true;
}

function showAdditionalInfo(selectedUseOption) {
    console.log('OPA!');
    // const selectedUseOption = additionalInfoSelect.value;
    if (selectedUseOption === 'play') setAdditionalInfoOptionsForPlayUse();
    const additionalInfoLabel = document.getElementById('additionalInfoLabel');
    additionalInfoLabel.innerText = AdditionalInfoLabelText[selectedUseOption];
    document.getElementById('additionalInfoDiv').hidden = false;
}

function setAdditionalInfoOptionsForPlayUse() {
    const additionalInfoSelect = document.getElementById('additionalInfoSelect');
    additionalInfoSelect.options[0].text = 'Gráfico';
    additionalInfoSelect.options[1].text = 'Performance';
}