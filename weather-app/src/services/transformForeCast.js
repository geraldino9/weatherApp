import moment from 'moment';
import transformWeather from './transformWeather';
import 'moment/locale/es';

const transformForeCast = data =>(
    data.list.filter(
        item => (
            moment.unix(item.dt).utc().hour() === 6 || 
            moment.unix(item.dt).utc().hour() === 12 || 
            moment.unix(item.dt).utc().hour() === 18  
        )
    ).map( item => (
        {
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).utc().hour(),
            data: transformWeather(item),
        }
    )
    
    )
);

export default transformForeCast;