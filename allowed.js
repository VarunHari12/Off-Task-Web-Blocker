document.addEventListener('DOMContentLoaded', function () {

    chrome.storage.sync.get(["approved"], function(approvedresults) {
        if (approvedresults.approved.length == 0) {
            addLink();
        }

       for (var i = 0; i < approvedresults.approved.length; i++) {
            var linkList = document.getElementById('linkList');
            var linkItem = document.createElement('li');
            linkItem.className = 'linkItem';

            var linkInput = document.createElement('input');
            linkInput.type = 'text';
            linkInput.className = 'linkInput';
            linkInput.disabled = true;
            linkInput.value = approvedresults.approved[i];
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
    })


    function addLink() {
        var linkList = document.getElementById('linkList');
        var linkItem = document.createElement('li');
        linkItem.className = 'linkItem';

        var linkInput = document.createElement('input');
        linkInput.type = 'text';
        linkInput.className = 'linkInput';
        linkInput.placeholder = 'Add a website to never block'
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
            if (inputElements[i].value == '') {
                var linkList = document.getElementById('linkList');
                var linkItems = document.querySelectorAll('.linkItem');
                linkList.removeChild(linkItems[i]);
                continue;
            }

            inputElements[i].disabled = true;
            links.push(inputElements[i].value);
        }

        chrome.storage.sync.set({"approved": links})
    })
})