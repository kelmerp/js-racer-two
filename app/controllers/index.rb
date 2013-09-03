get '/' do
  session.clear if session[:game_id]
  erb :index
end

get '/game' do
  erb :game
end

get '/replay' do
  old_game = Game.find(session[:game_id])
  player_1 = old_game.players.first
  player_2 = old_game.players.last

  game = Game.new
  game.players << player_1
  game.players << player_2
  game.save
  game.update_attributes(start: game.created_at)
  session[:game_id] = game.id

  erb :game
end

get '/winner/:winner_id' do
  time = Time.now
  puts "Winner is #{params[:winner_id]}"
 
  @winning_player = Player.find(params[:winner_id])

  @game = Game.find(session[:game_id])
  @game.winner = @winning_player
  @game.get_new_url
  @game.save

  erb :results
end

get '/quit' do
  session.clear

  redirect to "/"
end

########## POST ##########
post '/game/new' do
  player1 = Player.find_or_create_by_id(params[:player1])
  player2 = Player.find_or_create_by_id(params[:player2])
  game = Game.new
  game.players << player1
  game.players << player2
  game.save
  game.update_attributes(start: game.created_at)
  session[:game_id] = game.id
  redirect "/game"
end
