<?php /**
        Author: SpringHack - springhack@live.cn
        Last modified: 2016-05-02 23:08:51
        Filename: ../../../vj/classes/DataPoster.php
        Description: Created by SpringHack using vim automatically.
**/ ?>
<?php
	class DataPoster {
		
		private $poster = NULL;
		
		public function DataPoster($oj = "POJ", $id = "1000", $lang = "0", $code = "", $cid = '0')
		{
			//MySQL
			$this->db = new MySQL();
			if ($this->db->query("SHOW TABLES LIKE 'Record'")->num_rows() != 1)
			{
				$this->db->struct(array(
						'id' => 'text',
						'oid' => 'text',
						'rid' => 'text',
						'tid' => 'text',
						'user' => 'text',
						'time' => 'text',
						'memory' => 'text',
						'long' => 'text',
						'lang' => 'text',
						'result' => 'text',
						'oj' => 'text',
						'oj_u' => 'text',
						'oj_p' => 'text',
						'code' => 'longtext',
						'contest' => 'text'
					))->create("Record");
			}
			
			require_once(dirname(__FILE__)."/".$oj."_DataPoster.php");
			$str = $oj."_DataPoster";
			$this->poster = new $str("skvj01", "forskvj", $id, $lang, $code, $cid);
		}
		
		public function getData()
		{
			return $this->poster->getData();
		}
		
	}
?>
