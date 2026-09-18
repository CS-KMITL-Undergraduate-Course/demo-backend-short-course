async function get_data() {
  try {
    const res = await fetch('http://localhost:3000/data');

    if (!res.ok)
    {
      if (res.status === 404) throw new Error('Data not found');
      throw new Error(`Server error: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
  }
  catch (error) {
    console.log(`${error}`);
  }
}

get_data();
