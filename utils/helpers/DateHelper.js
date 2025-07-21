export function generateDays() {
    const days = [];
    for (let i = 1; i <= 31; i++) {
        days.push({
            id: i.toString().padStart(2, '0'),
            name: i.toString().padStart(2, '0')
        });
    }
    return days;
}

export function generateMonths() {
    const months = [];
    for (let i = 1; i <= 12; i++) {
        months.push({
            id: i.toString().padStart(2, '0'),
            name: i.toString().padStart(2, '0')
        });
    }
    return months;
}

export function generateLast100Years() {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i < 100; i++) {
        years.push({id: currentYear - i, name: currentYear - i});
    }
    return years;
}

export function getMailServers() {
    return [
        {
            "id": "gmail.com",
            "name": "gmail.com"
        },
        {
            "id": "yahoo.com",
            "name": "yahoo.com"
        },
        {
            "id": "outlook.com",
            "name": "outlook.com"
        },
        {
            "id": "hotmail.com",
            "name": "hotmail.com"
        },
        {
            "id": "icloud.com",
            "name": "icloud.com"
        },
        {
            "id": "aol.com",
            "name": "aol.com"
        },
        {
            "id": "protonmail.com",
            "name": "protonmail.com"
        },
        {
            "id": "zoho.com",
            "name": "zoho.com"
        },
        {
            "id": "yandex.com",
            "name": "yandex.com"
        },
        {
            "id": "mail.com",
            "name": "mail.com"
        }
    ]

    // return ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "aol.com", "protonmail.com", "zoho.com", "yandex.com", "mail.com"];
}