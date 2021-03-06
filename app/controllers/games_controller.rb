class GamesController < ApplicationController
before_filter :authenticate_user!
	def index
		if not(params[:level])
			@randomArr = ((0..7).to_a+(0..7).to_a).sort{rand() - 0.5};
			@gridsize = 4
			@level = 1
			@totalopen = 8
			@levelArr = [2,3,4]
		elsif((params[:level]) == "1")
			@randomArr = ((0..7).to_a+(0..7).to_a).sort{rand() - 0.5};
			@gridsize = 4
			@level = 1
			@totalopen = 8
			@levelArr = [2,3,4]
		elsif((params[:level]) == "2")
			@randomArr = ((0..17).to_a+(0..17).to_a).sort{rand() - 0.5};
			@gridsize = 6
			@level = 2
			@totalopen = 18
			@levelArr = [1,3,4]
		elsif((params[:level]) == "3")
			@randomArr = ((0..31).to_a+(0..31).to_a).sort{rand() - 0.5};
			@gridsize = 8
			@level = 3
			@totalopen = 32
			@levelArr = [1,2,4]
		elsif((params[:level]) == "4")
			@randomArr = ((0..49).to_a+(0..49).to_a).sort{rand() - 0.5};
			@gridsize = 10	
			@level = 4
			@totalopen = 50
			@levelArr = [1,2,3]
		end
		
	end
	
end
