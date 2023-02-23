import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

type Data = {
  name: string
}

export default function handler(req, res) {
    const pp = req.query.pp;
    if (!pp) res.status(501);

    var config = {
  method: 'get',
maxBodyLength: Infinity,
  url: `https://builder.pingpong.us/api/builder/pingpong/chat/demo?query=${pp}`,
  headers: { 
    'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"', 
    'Accept': 'application/json, text/plain, */*', 
    'sec-ch-ua-mobile': '?0', 
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36', 
    'sec-ch-ua-platform': '"macOS"', 
    'Sec-Fetch-Site': 'same-site', 
    'Sec-Fetch-Mode': 'cors', 
    'Sec-Fetch-Dest': 'empty', 
    'sec-gpc': '1', 
    'host': 'builder.pingpong.us'
  }
    };

    axios(config)
    .then(function (response) {
        var data = response.data;
        data = JSON.stringify(data).replace("핑퐁이", "인터").replace("pingpong.us", "sangho.xyz").replace("핑퐁", "인터");
        res.status(200).json({ rp: JSON.parse(data).response.replies[0].reply })
    })
    .catch(function (error) {
        console.log(error);
        res.status(500).json(error);
    }); 
  }