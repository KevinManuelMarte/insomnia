import { staff, hq } from './datos'

export default function Page() {
  return (
    <div className='text-white'>
      {staff.map(user => (
        <div key={user.name}>
          <p>{user.name}</p>
          <p>{user.role}</p>
        </div>
      ))}

      <h1>HQ</h1>
      <p>State: {hq.state}</p>
      <p>Country: {hq.country}</p>
    </div>
  );
}