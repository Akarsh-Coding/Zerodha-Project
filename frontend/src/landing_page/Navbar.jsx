import React from "react";

function Navbar() {
    return (
        <nav class="navbar sticky-top navbar-expand-lg border-bottom" style={{ backgroundColor: "#ffffff" }}>
            <div class="container p-2 d-flex justify-content-between align-items-center">
                <a class="navbar-brand" href="#">
                    <img src="/images/logo.svg" alt="Logo" style={{ width: "25%" }} />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active ms-3" aria-current="page" href="#">Signup</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active ms-3" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active ms-3" aria-current="page" href="#">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active ms-3" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active ms-3" href="#">Support</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
