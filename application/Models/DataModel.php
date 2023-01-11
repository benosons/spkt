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
        $builder = $this->db->table('data_tamu');
        $query   = $builder->get();
        // echo $this->db->getLastQuery();die;

        return  $query->getResult();
    }

}
