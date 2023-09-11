<?php namespace App\Models;

use CodeIgniter\Model;

class DataModel extends Model{

    public function saveData($table = null, $data = null)
    {
        return  $this->db->table($table)->insert($data);
    }

    public function getsurvey()
    {
        $builder = $this->db->table('data_survey');
        $query   = $builder->get();
        // echo $this->db->getLastQuery();die;

        return  $query->getResult();
    }

    public function gettamu()
    {
        $builder = $this->db->table('data_tamu')->select('id, nama, telp, jenis_kelamin, tujuan, create_date, update_date, create_by');
        $query   = $builder->get();
        // echo $this->db->getLastQuery();die;

        return  $query->getResult();
    }

    public function getpetugas()
    {
        $builder = $this->db->table('data_petugas');
        $query   = $builder->get();
        // echo $this->db->getLastQuery();die;

        return  $query->getResult();
    }

    public function getPerkara($id = null)
    {
        $builder = $this->db->table('data_perkara');
        if($id){
            $builder->getWhere(['id' => $id]);
        }
        $query   = $builder->get();
        // echo $this->db->getLastQuery();die;

        return  $query->getResult();
    }

    public function updateperkara($id, $data)
    {
      $builder = $this->db->table('data_perkara');
      $query   = $builder->where('id', $id);
      $query->update($data);
      // echo $this->db->getLastQuery();

      return true;
    }

}
