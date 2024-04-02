import React from 'react'
import AddStudent from './AddStudent'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar bg-primary" data-bs-theme="dark">
      <nav class="navbar navbar-expand-lg bg-body-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Student App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">AddStudent</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/search">SearchStudent</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"></a></li>
                    <li><a class="dropdown-item" href="#"></a></li>

                    <li><a class="dropdown-item" href="#">e</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true"></a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </nav>

     
        

    </div>
  )
}

export default Navbar