import { Request, Response } from "express";

import useCases from "../use-cases";

const createList = async (req: Request, res: Response) => {
    try {
        const response = await useCases.createList()
        return res.status(200).json({
            response
        })
    } catch (error: any) {
        return res.status(500).json({
            error
        })
    }
};

export default createList;
