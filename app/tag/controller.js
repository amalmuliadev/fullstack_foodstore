const Tag = require('./model');

async function index(req, res, next){ 

  try{
    let { limit = 10, skip = 0, q = ''} = req.query; 

    let criteria = {};

		if(q.length){
			// --- gabungkan dengan criteria --- //
			criteria = {
				...criteria, 
				name: {$regex: `${q}`, $options: 'i'}
			}
		}

    let count = await Tag.find(criteria).countDocuments();

    let tags = 
      await Tag
      .find(criteria)
      .limit(parseInt(limit))
      .skip(parseInt(skip))

    return res.json({data: tags, count});
  } catch(err){
    if(err && err.name == 'ValidationError'){
      return res.json({
        error: 1, 
        message: err.message,
        fields: err.errors
      })
    }
    
     next(err)
  }
}


async function store(req, res, next){


  try{

    let policy = policyFor(req.user);

    if(!policy.can('create', 'Tag')){ // <-- can create Tag
       return res.json({
          error: 1, 
          message: `Anda tidak memiliki akses untuk membuat tag`
      });
    }

    // (1) dapatkan data dari request yang dikirimkan client
    let payload = req.body;

    // (2) buat objek Tag baru berdasarkan payload
    let tag = new Tag(payload)

    // (3) simpan tag ke MongoDB
    await tag.save();  

    // (4) respon ke client dengan data tag yang baru saja disimpan
    return res.json(tag);
  } catch(err) {

    // (5) tangani kemungkinan error validasi dan error lainnya

    if(err && err.name === 'ValidationError'){
      return res.json({
        error: 1, 
        message: err.message, 
        fields: err.errors
      });
    }

    next(err);
  }
}

async function update(req, res, next){

  try{

    let policy = policyFor(req.user);

    if(!policy.can('update', 'Tag')){ // <-- can update Tag
       return res.json({
          error: 1, 
          message: `Anda tidak memiliki akses untuk mengupdate tag`
      });
    }

    let payload = req.body;

    let tag = await Tag.findOneAndUpdate({_id: req.params.id}, payload, {new: true, runValidators: true});

    return res.json(tag);
  } catch(err) {

    if(err && err.name === 'ValidationError'){
      return res.json({
        error: 1, 
        message: err.message, 
        fields: err.errors
      });
    }

    next(err);
  }
}

async function destroy(req, res, next){

  try{

    let policy = policyFor(req.user);

    if(!policy.can('delete', 'Tag')){ // <-- can delete Tag
       return res.json({
          error: 1, 
          message: `Anda tidak memiliki akses untuk menghapus tag`
      });
    }

    let tag = await Tag.findOneAndDelete({_id: req.params.id});  

    return res.json(tag); // <--- 

  } catch(err) {
    next(err);
  }
}

module.exports = {
  index,
  store,
  update,
  destroy
}
