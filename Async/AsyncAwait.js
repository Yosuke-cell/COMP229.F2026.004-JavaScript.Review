const getFakeperson = async () => {
    try {
        let res = await fetch("https://randomuser.me/api/?nat=US&results=1");
        let {results} = await res.json();
        console.log(results);
    } catch (err) {
        console.log(err);
    }
};

getFakeperson();