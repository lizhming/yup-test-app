export default async function getFeed(page: number): Promise<any> {
  const requestInit: RequestInit = {
    method: 'GET',
  }
  const res = await fetch(`https://api.yup.io/feed/dailyhits?page=${page}`, requestInit)

  if (res.ok) {
    return res.json()
  } else {
    console.log('Error: Fetching the feeds')
  }
  return {}
}
