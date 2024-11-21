(async () => {
    const embeddedObject = document.getElementById("qeDataT");
    const embeddedObject2 = document.getElementById("qeDataH");
    const embeddedObject3 = document.getElementById("qeDataI");
    const embeddedObject4 = document.getElementById("qeDataW");
    const embeddedObject5 = document.getElementById('filterpaneChart');

    if (embeddedObject) {
        const refApi = await embeddedObject.getRefApi();
        const obj = await refApi.getObject();
        
        let tTText = document.getElementById('title_temperature');
        let dTText = document.getElementById('temperature');
        let dTTextMax = document.getElementById('temperatureMax');
        let dTTextMin = document.getElementById('temperatureMin');

        const objLayout = await obj.getLayout();
        let title_temperature = objLayout.labelExpression;
        let temperature = objLayout.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
        let temperatureMax = objLayout.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
        let temperatureMin = objLayout.qHyperCube.qDataPages[0].qMatrix[0][1].qText;
        
        updateGauge(temperature, 'temperature');
        
        if (tTText && dTText && dTTextMax && dTTextMin) {
            tTText.innerHTML = `<div class="title_temperature">${title_temperature}</div>`;
            dTText.innerHTML = `<span class="temperature">${temperature}</span>`;
            dTTextMax.innerHTML = `<div class="temperature">${temperatureMax}</div>`;
            dTTextMin.innerHTML = `<div class="temperature">${temperatureMin}</div>`;
        }        

        obj.on('changed', async () => {
            const objLayout = await obj.getLayout();
            let title_temperature = objLayout.labelExpression;
            let temperature = objLayout.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
            let temperatureMax = objLayout.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
            let temperatureMin = objLayout.qHyperCube.qDataPages[0].qMatrix[0][1].qText;

            updateGauge(temperature, 'temperature');
            
            if (tTText && dTText && dTTextMax && dTTextMin) {
                tTText.innerHTML = `<div class="title_temperature">${title_temperature}</div>`;
                dTText.innerHTML = `<span class="temperature">${temperature}</span>`;
                dTTextMax.innerHTML = `<div class="temperature">${temperatureMax}</div>`;
                dTTextMin.innerHTML = `<div class="temperature">${temperatureMin}</div>`;
            }
        });
    } else {
        console.log("L'élément 'qeDataT' n'existe pas dans le DOM.");
    }

    if (embeddedObject2) {
        const refApi2 = await embeddedObject2.getRefApi();
        const obj2 = await refApi2.getObject();
        
        let tHText = document.getElementById('title_humidity');
        let dHText = document.getElementById('humidity');
        const objLayout2 = await obj2.getLayout();
        let title_humidity = objLayout2.labelExpression;
        let humidity = objLayout2.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
        
        if (tHText && dHText) {
            tHText.innerHTML = `${title_humidity}`;
            dHText.innerHTML = `${humidity}`;         
        }        

        obj2.on('changed', async () => {
            const objLayout2 = await obj2.getLayout();
            let title_humidity = objLayout2.labelExpression;
            let humidity = objLayout2.qHyperCube.qDataPages[0].qMatrix[0][0].qText;

            if (tHText && dHText) {
                tHText.innerHTML = `${title_humidity}`;
                dHText.innerHTML = `${humidity}`;
                dHGauge.style.width = `${humidity}%`;               
            }
        });
    } else {
        console.log("L'élément 'qeDataH' n'existe pas dans le DOM.");
    }

    if (embeddedObject3) {
        const refApi3 = await embeddedObject3.getRefApi();
        const obj3 = await refApi3.getObject();
        
        let tTIcon = document.getElementById('icon_temperature');
        console.log(tTIcon);
        const objLayout3 = await obj3.getLayout();
        let icon = objLayout3.qHyperCube.qDataPages[0].qMatrix[0][0].qText;

        if (tTIcon) {        
        //     if(icon === "https:") {
        //         const app = await refApi3.getField();
        //         console.log(app)
        // //         const result = await refApi3.GetField([
        // //             "[Ville]"
        // //           ])                
        // //         const r = await result.select([
        // //             { qText: "Paris" }, // Valeur à sélectionner
        // //             true,               // true pour ajouter à la sélection actuelle
        // //             123                 // Ce paramètre pourrait être utilisé pour des options supplémentaires (index, etc.)
        // //           ]);

        // //         let icon = r;
        // //         tTIcon.innerHTML = `<img src="${icon}">`;  
        //     }
             tTIcon.innerHTML = `<img src="${icon}">`;       
        } 

        obj3.on('changed', async () => {
            const objLayout3 = await obj3.getLayout();
            let icon = objLayout3.qHyperCube.qDataPages[0].qMatrix[0][0].qText;

            if (tTIcon) {
                tTIcon.innerHTML = `<img src="${icon}">`;               
            }
        });        

    } else {
        console.log("L'élément 'qeDataI' n'existe pas dans le DOM.");
    }

    if (embeddedObject4) {
        const refApi4 = await embeddedObject4.getRefApi();
        const obj4 = await refApi4.getObject();
        
        let tWText = document.getElementById('title_wind');
        let dWText = document.getElementById('wind');
        const objLayout4 = await obj4.getLayout();

        let title_wind = objLayout4.labelExpression;
        let wind = objLayout4.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
        
        if (tWText && dWText) {
            tWText.innerHTML = `${title_wind}`;
            dWText.innerHTML = `${wind}`;         
        }        

        obj4.on('changed', async () => {
            const objLayout4 = await obj4.getLayout();
            let title_wind = objLayout4.labelExpression;
            let wind = objLayout4.qHyperCube.qDataPages[0].qMatrix[0][0].qText;

            if (tWText && dWText) {
                tWText.innerHTML = `${title_wind}`;
                dWText.innerHTML = `${wind}`;
                dWGauge.style.width = `${wind}%`;               
            }
        });
    } else {
        console.log("L'élément 'qeDataW' n'existe pas dans le DOM.");
    }    

    if (embeddedObject5) {
        const refApi5 = await embeddedObject5.getRefApi();
        console.log(refApi5);
        const doc = await refApi5.getDoc();
        console.log(doc)
        const obj5 = await doc.getFieldList();
        console.log(obj5[6].qName)
        const field = refApi5.getField(obj5[6].qName);
        console.log(field)        
        // let dWText = document.getElementById('carousel-inner');
        // const objLayout5 = await obj5.getLayout();
        // console.log(objLayout5)
        // let list = objLayout5.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
        
        // if (tLwait) {
        //     tLwait.innerHTML = `${list}`;   
        // }        

        // obj4.on('changed', async () => {
        //     const refApi5 = await embeddedObject5.getRefApi();
        //     const obj5 = await refApi5.getObject();
            
        //     let dWText = document.getElementById('carousel-inner');
        //     const objLayout5 = await obj5.getLayout();
        //     console.log(objLayout5)
        //     let list = objLayout5.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
            
        //     if (tLwait) {
        //         tLwait.innerHTML = `${list}`;   
        //     }                
        // });
    } else {
        console.log("L'élément 'filterpaneChart' n'existe pas dans le DOM.");
    }       


    // Fonction pour mettre à jour la jauge
    function updateGauge(value, type) {
        const temperatureGauge = document.querySelector(".gauge-fill");
        let temperatureInt = parseFloat(value.replace(/°C/g, "").trim());

        if(type === 'temperature') {
            const gauge = document.getElementById("gauge-fill-temperature");

            let temperaturePercent = Math.max(0, Math.min(temperatureInt, 100));

            if (gauge) {
                gauge.style.width = `${temperaturePercent}%`; // Ajuste selon le type de jauge
            }            
        } else {
            const gauge = document.getElementById("gauge-fill-humidity");

            if (gauge) {
                gauge.style.width = `${value}%`; // Ajuste selon le type de jauge
            }
        }
        
        return temperatureGauge;
    }    
})();
