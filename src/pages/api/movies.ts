import { SEARCH_BASE_URL, POPULAR_BASE_URL } from '../../utilities/config';
import { basicFetch } from '../../services/fetchFunctions';
// Types
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Movies } from '../../utilities/types';

export default async function handler (req: NextApiRequest, res:NextApiResponse<Movies>){
    const { page, search } = req.query

    const endpoint = search ? `${SEARCH_BASE_URL}${search}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;

    console.log(endpoint);

    const data = await basicFetch<Movies>(endpoint);

    res.status(200).json(data);

}
