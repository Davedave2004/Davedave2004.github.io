function getTitle(vm) {
    const { title } = vm.$options
    if (title) {
        return typeof title === 'function'
            ? title.call(vm)
            : title
    }
}

function getHeaderTitle(vm) {
    const { headerTitle } = vm.$options
    if (headerTitle) {
        return typeof headerTitle === 'function'
            ? headerTitle.call(vm)
            : headerTitle
    }
}

export default {
    created() {
        const title = getTitle(this)
        if (title) {
            document.title = title
        }
    },
    mounted() {
        const headerTitle = getHeaderTitle(this)
        if (headerTitle) {
            document.getElementById('header-title').innerText = headerTitle;
        }
    }
}