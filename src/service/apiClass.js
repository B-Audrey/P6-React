class Api {

    async init() {
        let response = await fetch('../data.json');
        let dataToDisplay = await response.json();
        return dataToDisplay;
    }

    getAccById (data, idToFind){
        const valueToFind = data.find((element) => element.id === idToFind)
        return valueToFind;
    }
}

const apiLink = new Api()

export default apiLink;