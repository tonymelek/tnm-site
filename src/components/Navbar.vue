<template>
    <nav class="container sticky-top" ref="nav" :class="isMobile ? 'pr w-100' : ''">
        <div v-show="isMobile" class="w-100 bg-nav mb-2">
            <button class="btn-no-style" @click="toggleBurgerMenu">
                <span  class="material-symbols-outlined">{{showBurgerMenu?'menu_open':'menu'}}</span>
            </button>
        </div>

        <ul class="list-unstyled flex" :class="menuClasses">
            <li v-for="(item, index) in menu" :key="item.main" class="pr">
                <button class="btn-menu" type="menu" @focus="retractSubmenus" @click="handleMainClick(index)">{{ item.main
                }}</button>
                <ul v-if="item.children" class="list-unstyled card mt-2 pa py-2" :class="showSubmenu(item.clicked)">
                    <li class="subitem" v-for="subitem in item.children">
                        <button @click="handleNaviagte(subitem.link)" class="subitem-btn ps-3 w-100"> {{ subitem.displayName
                        }}</button>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
import { setPageTitle } from '../utils/setPageTitle';
export default {
    name: 'navbar',
    data: () => ({
        menu: [
            { main: 'Home', clicked: false, link: '/' },
            {
                main: 'About us', clicked: false, children: [{
                    displayName: 'About us', link: '/about-us'
                }]
            },
            {
                main: 'Contact us', clicked: false, children: [
                    { displayName: 'Contact us', link: '/about-us' }
                ]
            }
        ],
        showBurgerMenu: false
    }),
    computed: {
        isMobile() {
            return window.innerWidth < 768
        },
        menuClasses() {
            if (this.isMobile) {
                return `flex-column fit-content card pa ${this.showBurgerMenu ? 'menu-show' : 'menu-hide'}`
            }
            return 'bg-nav'
        },

    },
    methods: {
        handleMainClick(index) {
            console.log(index, this.menu[index]);
            this.menu[index].clicked = !this.menu[index].clicked;
            if (this.menu[index].link) {
                this.handleNaviagte(this.menu[index].link);
            }
        },
        retractSubmenus() {
            this.menu = this.menu.map(item => ({ ...item, clicked: false }));

        },
        handleNaviagte(link) {
            this.retractSubmenus();
            setPageTitle(link);
            this.$router.push(link);
            document.querySelector('h1').focus();
            this.showBurgerMenu = false;

        },
        toggleBurgerMenu() {
            this.showBurgerMenu = !this.showBurgerMenu;
        },
        showSubmenu(clicked) {
            const isVisible = clicked ? 'visible menu-show' : 'menu-hide'
            if (this.isMobile) {
                return `mobile-submenu ${isVisible}`
            }
            return `desktop-submenu ${isVisible}`
        }
    },
    mounted() {
        this.$refs.nav.addEventListener("focusout", (e) => {
            if (!this.$refs.nav.matches(':focus-within')) {
                this.retractSubmenus();
                this.showBurgerMenu=false;
            }
        });
        setPageTitle(this.$route.path);
    }
}
</script>

<style scoped>
.bg-nav {
    background-color: antiquewhite;
}

.btn-no-style {
    border: none;
    background-color: transparent;
}

.pr {
    position: relative;
    width: fit-content;
}

.btn-menu {
    border: none;
    background-color: transparent;
    padding: .5rem 1rem;
    min-width: 8rem;
}

.btn-menu:hover,
.btn-menu:focus {
    background-color: black;
    color: wheat;
    font-weight: 700;
}

.pa {
    position: absolute;
    min-width: 8rem;
    z-index: 0;
}

.mobile-submenu {
    top: 0;
    left: calc(100% + .5rem);
    margin-top: 0 !important;
}

.subitem-btn {
    border: none;
    background-color: transparent;
    text-align: start;
}

.subitem-btn:hover,
.subitem-btn:focus {
    background-color: rgb(11, 11, 110);
    color: wheat;
}

.fit-content {
    width: fit-content;
}

.menu-show {
    transform: translateY(0);
    opacity: 1;
    transition: transform .5s, opacity 1s;
}

@keyframes fadeout {
    from {
        visibility: visible;
    }

    to {
        visibility: hidden;
    }
}

.menu-hide {
    transform: translateY(-100%);
    opacity: 0;
    transition: transform 1s, opacity 1s;
    animation-name: fadeout;
    animation-duration: 0s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
}</style>