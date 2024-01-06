document.addEventListener('DOMContentLoaded', function () {
    function addLink() {
        var linkList = document.getElementById('linkList');
        var linkItem = document.createElement('li');
        linkItem.className = 'linkItem';

        var linkInput = document.createElement('input');
        linkInput.type = 'text';
        linkInput.className = 'linkInput';
        linkItem.appendChild(linkInput);

        var deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = function () {
            linkList.removeChild(linkItem);
        };
        linkItem.appendChild(deleteButton);

        linkList.appendChild(linkItem);
    }

    document.querySelector('button').addEventListener('click', addLink);

    document.getElementById('doneButton').addEventListener('click', function () {
        const links = [];

        var inputElements = document.querySelectorAll('.linkInput');

        for (var i = 0; i < inputElements.length; i++) {
            const link = inputElements[i].value;
            links.push(link);
        }

        chrome.storage.sync.set({"approved": links})
        chrome.storage.sync.get(["approved"], function(results) {
            console.log(results.approved)
            //})
        //window.close();
    });
})
})