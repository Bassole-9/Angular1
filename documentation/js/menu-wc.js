'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">toliba documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BassoleModule.html" data-type="entity-link" >BassoleModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BassoleRoutingModule.html" data-type="entity-link" >BassoleRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CocktailModule.html" data-type="entity-link" >CocktailModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CocktailRoutingModule.html" data-type="entity-link" >CocktailRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AheaderComponent.html" data-type="entity-link" >AheaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AlayoutComponent.html" data-type="entity-link" >AlayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CAddComponent.html" data-type="entity-link" >CAddComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CDeleteComponent.html" data-type="entity-link" >CDeleteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CEditComponent.html" data-type="entity-link" >CEditComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CIndexComponent.html" data-type="entity-link" >CIndexComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CocktailComponent.html" data-type="entity-link" >CocktailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContactComponent.html" data-type="entity-link" >ContactComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DasboardComponent.html" data-type="entity-link" >DasboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ErrorComponent.html" data-type="entity-link" >ErrorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LogoutComponent.html" data-type="entity-link" >LogoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PheaderComponent.html" data-type="entity-link" >PheaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlayoutComponent.html" data-type="entity-link" >PlayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidemenuComponent.html" data-type="entity-link" >SidemenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UAddComponent.html" data-type="entity-link" >UAddComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UDeleteComponent.html" data-type="entity-link" >UDeleteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UEditComponent.html" data-type="entity-link" >UEditComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UIndexComponent.html" data-type="entity-link" >UIndexComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});