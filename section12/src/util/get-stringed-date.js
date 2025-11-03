import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import 'dayjs/locale/ko'

dayjs.extend(isLeapYear);
dayjs.locale('ko');

export const getStringedDate = (targetDate) => {
    // let year = targetDate.getFullYear();
    // let month = targetDate.getMonth() + 1;
    // let date = targetDate.getDate();

    // month = month < 10 ? `0${month}` : month
    // date = date < 10 ? `0${date}` : date

    // return `${year}-${month}-${date}`

    return String(dayjs(targetDate).format('YYYY-MM-DD HH:mm:ss'));
}