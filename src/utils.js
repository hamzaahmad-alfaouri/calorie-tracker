export function getDateFromString(dateString) {
    const tokens = dateString.split("-");
    return new Date(Number(tokens[0]), Number(tokens[1]) - 1, Number(tokens[2]), 12); // تحديد الساعة لتجنب اختلافات المنطقة الزمنية
}
