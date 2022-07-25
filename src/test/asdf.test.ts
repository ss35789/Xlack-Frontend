
import axios from 'axios';

test('test',()=>{
    expect(axios.post(`https://xlack.kreimben.com/api/channel/?channel_name=123`,{
        channel_name:"Asd"
})).toBe({})
})