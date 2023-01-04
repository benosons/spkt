<?php namespace App\Models;

use CodeIgniter\Model;

class ParamModel extends Model{

    public function getBerita($param = null, $role = null, $create_by = null, $update_by = null, $id = null)
    {
          return  $this->select(['data_berita.*', 'users.user_id', 'users.user_name', 'users.user_email', 'users.user_role', 'users.user_fullname'])->join('users','users.user_id = data_berita.create_by')->getWhere(['create_by' => $create_by])->getResult();
    }

    public function getparam($table = null, $id = null)
    {
          $builder = $this->db->table($table);
          if($id){
            $query   = $builder->getWhere(['satuan_code' => $id]);
          }else{
            $query   = $builder->get();
          }
          return  $query->getResult();
    }

    public function loadBerita($id)
    {
        $builder = $this->db->table('data_berita');
        $query   = $builder->getWhere(['satuan' => $id]);
        return  $query->getResult();
    }

    public function saveParam($table = null, $data = null)
    {
        return  $this->db->table($table)->insert($data);
    }

    public function getkota($param = null, $id = null )
    {
        if($param == 'kecamatan'){
          $sql = "select * from districts where regency_id = 3211";
        }else if($param == 'desa'){
          $sql = "select * from villages where district_id = $id";
        }
        
        $result = $this->db->query($sql);
        $row = $result->getResult();
        return $row;
    }

    public function getPermohonanByDate($type = null, $m = null, $y = null)
    {

      $sql = "SELECT type, count(id) tot, YEAR(created_date) tahun, MONTH(created_date) bulan FROM data_permohonan where type = '$type' and MONTH(created_date) = '$m' and YEAR(created_date) = '$y' GROUP BY YEAR(created_date), MONTH(created_date), type ORDER BY bulan";
      $result = $this->db->query($sql);
      $row = $result->getResult();
      return $row;
    }

    public function getUsersDash()
    {

      $sql = "select (select count(*) from users) as userall, (select count(*) teknis from users
      inner join data_permohonan on data_permohonan.created_by = users.user_id where data_permohonan.type = '1') as teknis, 
      (select count(*) operasi from users
      inner join data_permohonan on data_permohonan.created_by = users.user_id where data_permohonan.type = '2') as operasi";
      $result = $this->db->query($sql);
      $row = $result->getResult();
      return $row;
    }

    public function getProgres($type = null)
    {

      $sql = "select (select count(id) from data_permohonan where type = '$type') as total, (select count(id) from data_permohonan where type = '$type' and `status` = '1') as selesai";
      $result = $this->db->query($sql);
      $row = $result->getResult();
      return $row;
    }

}
