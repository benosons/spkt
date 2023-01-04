<?php namespace App\Models;

use CodeIgniter\Model;

class ProgramModel extends Model{
    protected $table = 'data_program';
    protected $primaryKey = 'id';
    protected $allowedFields = ['kode_program','nama_program','created_by','updated_by','create_date','update_date'];
    protected $createdField  = 'create_date';
    protected $updatedField  = 'update_date';

    public function getProgram($role=null)
    {
          if($role == '30'){ //ppk
            $builder = $this->db->table('data_program');
            $query   = $builder->get();
            return  $query->getResult();
          }
          
          $builder = $this->db->table('data_program');
          $query   = $builder->get();
          return  $query->getResult();
    }

    public function getpermohonan($role=null,$userid=null,$type=null)
    { 

          if($role == '0'){ 
            $builder = $this->db->table('data_permohonan');
            $query   = $builder->getWhere(['created_by' => $userid, 'type' => $type]);
            return  $query->getResult();
          }
          $builder = $this->db->table('data_permohonan');
          $query   = $builder->getWhere(['type' => $type]);
          // echo $this->db->getLastQuery();die;
          return  $query->getResult();
    }

    public function countpermohonan($role=null,$userid=null,$type=null)
    { 

          if($role == '0'){ 
            $builder = $this->db->table('data_permohonan');
            $query   = $builder->getWhere(['created_by' => $userid, 'type' => $type]);
            return  $query->getResult();
          }

          $builder = $this->db->table('data_permohonan');
          $query   = $builder->getWhere(['status' => null, 'kategori' => null, 'param' => null]);
          // echo $this->db->getLastQuery();die;
          return  $query->getResult();
    }

    public function saveParam($table = null, $data = null)
    {
        return  $this->db->table($table)->insert($data);
    }

}
