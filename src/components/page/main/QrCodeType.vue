<template>
        <div class="col-md-12 settings-menu">
            <div class="menu">
                <!-- <i class="bi bi-caret-right text-light"></i>
                <i class="bi bi-caret-left text-light hidden"></i> -->
                <div class="type-bar-inner custom-tab mb-0">
                    <li class="menu-tab" @click="itemClick(item)"  v-for="item in options" :key="item.id">
                        <div class="menu-item" :class="{'active': item.active}">
                            <div class="nav-icon-img">
                                <i :class="'bi bi-' + item.csslabel"></i>
                            </div>
                            <div class="title">{{ item.label }}</div>
                        </div>
                    </li> 
                </div>
            </div>
        </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            options: [
                {
                    csslabel: "link",
                    id: 1,
                    label: "URL",
                    active: true,
                },
                {
                    csslabel: "facebook",
                    id: 22,
                    label: "Facebook",
                    active: false,
                },
                {
                    csslabel: "file",
                    id: 23,
                    label: "File",
                    active: false,
                },
                {
                    csslabel: "wifi",
                    id: 12,
                    label: "Wi-Fi",
                    active: false,
                },
                {
                    csslabel: "google",
                    id: 25,
                    label: "Google Form",
                    active: false,
                },
                {
                    csslabel: "youtube",
                    id: 26,
                    label: "Youtube",
                    active: false,
                },
                {
                    csslabel: "instagram",
                    id: 27,
                    label: "Instagram",
                    active: false,
                },
                {
                    csslabel: "pinterest",
                    id: 28,
                    label: "Pinterest",
                    active: false,
                },
                {
                    csslabel: "envelope",
                    id: 29,
                    label: "Email",
                    active: false,
                },
                {
                    csslabel: "card-text",
                    id: 30,
                    label: "Text",
                    active: false,
                },
                {
                    csslabel: "apple",
                    id: 31,
                    label: "App stores",
                    active: false,
                },
                {
                    csslabel: "person-vcard",
                    id: 32,
                    label: "vCard",
                    active: false,
                },
                {
                    csslabel: "credit-card",
                    id: 33,
                    label: "H5 editor",
                    active: false,
                },
            ],
        };
    },
    methods: {
        itemClick(item) {
            if (item.active) return;
            this.options.forEach((o) => (o.active = false));
            item.active = true;
            this.$store.commit('setQrcodeType', item.label);
            console.log(this.$store)
        },
    },
};
</script>

<style scoped>
.generator-container .settings-menu {
    position: relative;
    padding: 12px 24px;
    grid-gap: 24px;
    gap: 24px;
    flex-wrap: wrap;
    align-items: flex-start;
    box-sizing: border-box;
    background: #e8eef2;
    margin-bottom: 16px;
    background: #1c66b8;
    border: 1px solid #2c90ff;
    border-radius: 8px;
}
.generator-container .menu .type-bar-inner {
    display: flex;
    flex-wrap: nowrap;
    box-sizing: border-box;
    box-shadow: none!important;
    border: 0!important;
    width: 100%;
    flex-shrink: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-bottom: -16px;
    scrollbar-width: none;
    scroll-behavior: smooth;
}

.generator-container .menu .menu-tab:first-child {
    margin-left: 0!important;
}

.generator-container .menu .menu-tab {
    padding: 0;
    list-style: none;
    display: inline-block;
    margin: 0 2px;
    text-align: center;
}
.menu-tab {
    padding: 0;
    list-style: none;
    display: inline-block;
    margin: 0 2px;
    text-align: center;
}
.menu-item {
    min-width: 42px;
    min-height: 50px;
    text-decoration: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 0 5px;
    cursor: pointer;
    transition: all 0.3s;
}
.menu-item.active,
.menu-item:hover {
    background: #fff;
    color: #000;
}
.menu-item.active .nav-icon-img,
.menu-item:hover .nav-icon-img {
    color: #1c93bd
}
.nav-icon-img {
    margin: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.title {
    white-space: nowrap;
    font-family: Metropolis;
    font-size: 12px;
    font-weight: 400;
}
.generator-container .menu .menu-tab .menu-item {
    min-width: 68px;
    min-height: 66px;
    text-decoration: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 0 5px;
    cursor: pointer;
    transition: all .3s;
}
.generator-container .menu .menu-tab .menu-item.active, .generator-container .menu .menu-tab .menu-item:hover {
    background: #fff;
    color: #000;
}

.generator-container .menu i.bi-caret-right {
    right: 10px;
}
.bi::before {
    transform: scale(1.5);
}
.generator-container .menu .bi-caret-left, .generator-container .menu .bi-caret-right {
    font-weight: 700;
    font-size: 12px;
    position: absolute;
    top: 40px;
    height: 14px;
    width: 6px;
    cursor: pointer;
}

</style>
