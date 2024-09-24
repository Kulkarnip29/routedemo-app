import { useState } from 'react';
import UpdateCategory from './UpdateCategory';

function CatDisplay(props) {
    let list = props.data;

    let [rowClick, setRowClick] = useState(false);
    let [rowData, setRowdata] = useState();

    function funRowClick(obj) {
        setRowdata(obj);
        setRowClick(true);
    }

    function funSort(event) {
        var str = event.currentTarget.textContent;
        console.log(str);
        if (str === "Price") {
            list.sort(function(a, b) {
                return b.price - a.price;
            });
        } else if (str === "Rating") {
            // Rating sorting logic
        }
    }

    return (
        <>
            <div>
                <table border="2">
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>QR Code</th>
                        <th>Img</th>
                    </tr>
                    {list.map((x) => {
                        return (
                            <tr key={x.id} onClick={() => { funRowClick(x); }}>
                                <td>{x.id}</td>
                                <td>{x.title}</td>
                                <td>{x.brand}</td>
                                <td onClick={funSort}><ins>{x.price}</ins></td>
                                <td onClick={funSort}><ins>{x.rating}</ins></td>
                                <td><img src={x.meta.qrCode} alt="QR Code"></img></td>
                                <td><img src={x.thumbnail} alt="Thumbnail"></img></td>
                            </tr>
                        );
                    })}
                </table>
            </div>
            {rowClick && <UpdateCategory row={rowData} />}
        </>
    );
}

export default CatDisplay;
