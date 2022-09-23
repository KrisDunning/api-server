'use strict';


class ModelInterface{
  constructor(model){
    this.model=model;
  }

  async create(json){
    console.log('the JSON',json);
    try{
      let record= await this.model.create(json);
      return record;
    }catch(err){
      console.error(' CREATE! ERROR!!!!!!',err);
      return err;
    }
  }

  async read(id=null){
    console.log('READ ID',id);
    try{
      let record;
      if(id){
        record= await this.model.findOne({where:{id}});
      } else{
        record= await this.model.findAll();
      }
      return record;
    }catch(err){
      console.log('READ! ERROR!!!!!!');
      return err;
    }
  }

  async update(reqBody,id){
    console.log('UPDATE BY ID ',id);
    try{
      let record;
      if(id){
        await this.model.update({reqBody},{WHERE:{id}});

        record= await this.model.findOne({where:{id}});

        return record;
      }
    }catch (err){
      console.log('UPDATE! ERROR!!!!!!');
      return err;
    }
  }

  async destroy(id){
    console.log('DESTRY BY ID', id);
    try{
      if(id){
        await this.model.destroy({where:{id}});
      }

    }catch(err){
      console.log('DESTROY! ERROR!!!!!');
      return err;
    }
  }


}


module.exports = ModelInterface;
