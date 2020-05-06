

const getdatainsert = (TenNhom) => {
    let config = {
        method: "POST",
        body: JSON.stringify({
            TenNhom
        }),
    };
    fetch('https://misappmobile.000webhostapp.com/trangquantri/admin/nhomnguoidung/insert.php', config)
        .then(response => response.json());
}

module.exports = getdatainsert;

// const getdatainsert = (TenNhom) =>
//     fetch('https://misappmobile.000webhostapp.com/trangquantri/admin/nhomnguoidung/insert.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//         },
//         body: JSON.stringify({ TenNhom }),
//     }).then(response => response.json());

// module.exports = getdatainsert;
