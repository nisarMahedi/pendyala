document.addEventListener("DOMContentLoaded", function () {

    // Check whether the user has already accepted during this visit
    if (sessionStorage.getItem("imamAccepted") === "true") {
        return;
    }

    // Create popup
    const popup = document.createElement("div");

    popup.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.75);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            padding: 20px;
        ">

            <div style="
                background: white;
                max-width: 600px;
                width: 100%;
                padding: 35px 25px;
                text-align: center;
                border-radius: 12px;
                box-shadow: 0 5px 30px rgba(0,0,0,0.4);
            ">

                <h2 style="margin-bottom: 25px;">
                    Welcome to Pendyala
                </h2>

                <p style="
                    font-size: 18px;
                    line-height: 1.7;
                    margin-bottom: 30px;
                ">
                    I accept Hazrat Syed Muhammad Jaunpuri
                    Alaihissalam as  Imamuna Mehdi Maud Alaihisalam.
                </p>

                <button id="acceptImam" style="
                    background: #0d6efd;
                    color: white;
                    border: none;
                    padding: 10px 30px;
                    border-radius: 6px;
                    font-size: 16px;
                    cursor: pointer;
                ">
                    I Accept
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(popup);

    // Accept button
    document.getElementById("acceptImam").addEventListener("click", function () {

        sessionStorage.setItem("imamAccepted", "true");

        popup.remove();

    });

});