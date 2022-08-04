/// To resolve issue on Android: https://github.com/lingui/js-lingui/issues/442#issuecomment-699202352
if (typeof Intl === 'undefined') {
    require('intl')
    require('intl/locale-data/jsonp/en')
}

export function formatDate(timestamp: string) {
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(timestamp))
}

export function formatDateTime(timestamp: string) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short'
    }).format(new Date(timestamp))
}
