<?php namespace App\Controllers;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\Files\UploadedFile;
use App\Controller\BaseController;

class Jsondata extends \CodeIgniter\Controller
{
	protected $session;
	protected $request;

  function __construct(RequestInterface $request)
  {
      	$this->session = session();
		$this->now = date('Y-m-d H:i:s');
		$this->request = $request;
      	$this->logged = $this->session->get('logged_in');
		$this->data = array(
			'version' => \CodeIgniter\CodeIgniter::CI_VERSION,
			'baseURL' => BASE.'/public',
			// 'baseURL' => BASE,
			'userid' => $this->session->get('user_id'),
			'username' => $this->session->get('user_name'),
			'role' => $this->session->get('user_role'),
		);

	}

		public function submitsurvey(){
			try
			{
			$request  = $this->request;
			$table 	  = $request->getVar('table');

			$model 	  = new \App\Models\DataModel();
	
			$data = [];
			$data['nomor']			= $request->getVar('nomor');
			$data['jenis_kelamin']	= $request->getVar('jenis_kelamin');
			$data['pendidikan']		= $request->getVar('pendidikan');
			$data['pekerjaan']		= $request->getVar('pekerjaan');
			// $data['kesesuaian']		= $request->getVar('kesesuaian');
			// $data['kemudahan']		= $request->getVar('kemudahan');
			// $data['kecepatan']		= $request->getVar('kecepatan');
			// $data['pelayanan']		= $request->getVar('pelayanan');
			// $data['kompetensi']		= $request->getVar('kompetensi');
			// $data['perilaku']		= $request->getVar('perilaku');
			// $data['penanganan']		= $request->getVar('penanganan');
			// $data['sarana']			= $request->getVar('sarana');
			$data['saran_kritik']	= $request->getVar('saran_kritik');
			$data['emot']			= $request->getVar('emot');
				
			$data['create_date'] 	= $this->now;
			$data['update_date'] 	= $this->now;
			$res = $model->saveData($table, $data);
			$id  = $model->insertID();
	
			$response = [
					'status'   => 'sukses',
					'code'     => '0',
					'data' 	   => 'terkirim'
			];
			header('Content-Type: application/json');
			echo json_encode($response);
			exit;
			}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}
	
		}

		public function submittamu(){
			try
			{
			$request  = $this->request;
			$table 	  = $request->getVar('table');
			
			foreach ($_FILES as $key => $img) {
				$path = $img["tmp_name"];
				$type = $img['type'];
				$data = file_get_contents($path);
				$base64[$key] = 'data:image/' . $type . ';base64,' . base64_encode($data);
			}			

			$model 	  = new \App\Models\DataModel();
	
			$data = [];
			$data['nama']			= $request->getVar('nama');
			$data['telp']			= $request->getVar('telp');
			$data['jenis_kelamin']	= $request->getVar('jenis_kelamin');
			$data['ektp']			= $base64['ektp'];
			$data['selfie']			= $base64['selfie'];
			$data['tujuan']			= $request->getVar('tujuan');
				
			$data['create_date'] 	= $this->now;
			$data['update_date'] 	= $this->now;
			$res = $model->saveData($table, $data);
			$id  = $model->insertID();
	
			$response = [
					'status'   => 'sukses',
					'code'     => '0',
					'data' 	   => 'terkirim'
			];
			header('Content-Type: application/json');
			echo json_encode($response);
			exit;
			}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}
	
		}

		public function loadsurvey()
		{
			try
			{
					$request  	= $this->request;
					$id		 	= $request->getVar('id');
					$role 		= $this->data['role'];
					$userid		= $this->data['userid'];
	
					$model 	  = new \App\Models\DataModel();

	
					$fulldata = [];
					$data = $model->getsurvey();
					
					if($data){
						$response = [
							'status'   => 'sukses',
							'code'     => '1',
							'data' 	   => $data
						];
					}else{
						$response = [
							'status'   => 'gagal',
							'code'     => '0',
							'data'     => 'tidak ada data',
						];
					}
	
					header('Content-Type: application/json');
					echo json_encode($response);
					exit;
				}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}
		}

		public function loadtamu()
		{
			try
			{
					$request  	= $this->request;
					$id		 	= $request->getVar('id');
					$role 		= $this->data['role'];
					$userid		= $this->data['userid'];
	
					$model 	  = new \App\Models\DataModel();

	
					$fulldata = [];
					$data = $model->gettamu();
					
					if($data){
						$response = [
							'status'   => 'sukses',
							'code'     => '1',
							'data' 	   => $data
						];
					}else{
						$response = [
							'status'   => 'gagal',
							'code'     => '0',
							'data'     => 'tidak ada data',
						];
					}
	
					header('Content-Type: application/json');
					echo json_encode($response);
					exit;
				}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}
		}
}
