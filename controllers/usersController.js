import Users from "../models/usersModels.js";
import { where } from "sequelize";

export const Index = async(req, res)=>{
try {
        const data = await Users.findAll();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Data Error'});
    }
}

export const Store = async(req, res)=>{
    try {
        const { name, email, age}= req.body;

        const data = await Users.create({
            name: name,
            email: email,
            age: age
        });
        res.status(201).json({ msg:'Data Berhasil Masuk',id:data.id });
        console.log("Created Data:", data);
        console.log("Returned ID:", data.id);
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Data Error'});
    }
}

export const getId = async (req, res) => {
    try {
      const id = req.params.id;
      console.log("IDNYA NIH BOS =", id);
      const data = await Users.findOne({
        where: {
          id: id
        }
      });
  
      if (!data) return res.json({ msg: 'User tidak ditemukan' });
  
      // Mengonversi UUID Buffer ke string
      const user = data.toJSON();
      user.id = user.id.toString();
  
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Data Error" });
    }
  };
  
  export const Update = async (req, res) => {
    try {
      const { name, email, age } = req.body;
      const data = await Users.findByPk(req.params.id);
      if (!data) return res.status(404).json({ msg: 'User not found' });

      
      const updated = await data.update({
        name: name || data.name,
        email: email || data.email,
        age: age || data.age
      });
  
      res.status(200).json(updated);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Data Error' });
    }
  };
  

export const Destroy = async(req, res)=>{
    try {
        const id = req.params.id;
        await Users.destroy({ where: { id: id.toString('utf-8') } });
            res.json({msg:'Data berhasil dihapus'})
    } catch (error) {
        res.status(500).json({msg:"Data Error"});
    }
    
}