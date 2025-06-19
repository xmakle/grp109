 // Created by Lev 
const developers = ["Lev", "Ian", "Dastan"];
        let index = 0;

        function cycleNames() {
            const devElement = document.getElementById("devName");
            devElement.textContent = developers[index];
            index = (index + 1) % developers.length;
        }

        // Start cycling names every 2 seconds
        cycleNames(); 
        setInterval(cycleNames, 2000);
